import Header from './_components/Header'
import HeroSection from './_components/Slider'
import CategorySection from './_components/Category'
import Footer from './_components/Footer'
import DataWrapperForMainPage from './_components/DataWrapperForMainPage'

export default function Main() {
  return (
    <DataWrapperForMainPage>
      <div className="w-full bg-white">
        <Header />
        <HeroSection />
        <CategorySection />
        <Footer />
      </div>
    </DataWrapperForMainPage>
  )
}
