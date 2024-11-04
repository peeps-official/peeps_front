'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { getLoginUserData } from '@/src/common/api/user'
import { LoginUserData_T } from '@/src/common/types/user'
import { onlyEnglishAndNumber } from '@/src/common/utils/valid/onlyEnglishAndNumber'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

const NEED_DATA_LIST: Record<string, string> = {
  user_id: '유저 아이디',
}

const USER_ID_MIN_LENGTH = 2
const USER_ID_MAX_LENGTH = 20

interface FormInputs {
  user_id: string
}

export default function UserIdSetupPage() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormInputs>()

  const { data: loginData, isSuccess } = useQuery<LoginUserData_T, Error>({
    queryKey: ['userData', { type: 'login' }],
    queryFn: getLoginUserData,
  })

  const queryClient = useQueryClient()

  const onSubmit: SubmitHandler<FormInputs> = async (inputData) => {
    const { user_id } = inputData

    if (!user_id) {
      alert('입력값이 없습니다.')
      return
    }

    if (user_id.length <= USER_ID_MIN_LENGTH || user_id.length >= USER_ID_MAX_LENGTH) {
      alert(`${USER_ID_MIN_LENGTH}자 이상 ${USER_ID_MAX_LENGTH}자 이하로 입력해주세요.`)
      return
    }

    if (!onlyEnglishAndNumber(user_id)) {
      alert('영어와 숫자만 입력 가능합니다.')
      return
    }

    try {
      const { data, status }: AxiosResponse = await axiosWithAuth.patch('/login/id', {
        user_id,
        validateStatus: (status: number) => status < 500,
      })

      if (status === 200) {
        alert('수정되었습니다.')
        queryClient.invalidateQueries({ queryKey: ['userData'] }).then(() => {
          router.push(`/${data.user_seq}`)
        })
      }
    } catch (error) {
      if ((error as AxiosError).response?.status === 409) {
        alert('이미 있는 아이디입니다.')
      }
    }
  }

  if (!isSuccess || !loginData?.needData || loginData.needData.length === 0) {
    router.push(`/${loginData?.user_data.user_seq}`)
    return null
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 w-fit text-nowrap text-center text-3xl font-extrabold text-gray-900">
            PEEPS에서 사용할 아이디가 필요해요!
          </h2>
          <p className="mt-2 text-left text-sm text-gray-600">
            아이디는 한번 설정하면 변경될 수 없어요. 신중하게 결정해주세요.
          </p>
        </div>
        <form className="mt-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {loginData.needData.includes('user_id') && (
            <div>
              <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                {NEED_DATA_LIST.user_id}
              </label>
              <div className="mt-1">
                <input
                  id="user_id"
                  type="text"
                  {...register('user_id')}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-blue-secondary sm:text-sm"
                  placeholder="영어와 숫자로 3-20자"
                />
              </div>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border bg-blue-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-primaryHover focus:ring-2 focus:ring-blue-secondary focus:ring-offset-2"
            >
              설정하기
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
