import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import Provider from '@/components/Provider';
export default function Home() {
  return (
    <Provider>
      <div className="container">
          <div className="flex justify-between mb-[19px] gap-[20px] h-[423px]">
            <Categories/>
            <Banner/>
          </div>
      </div>
    </Provider>
  );
}
