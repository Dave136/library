import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '@/components/footer';
import Header from '@/components/header';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col relative min-h-screen text-gray-500 dark:(bg-dark-700 text-gray-300) lg:(flex-col items-center)">
      <Header />
      <main
        className={`flex-1 w-[90%] mx-auto mt-4 mb-12 lg:w-[95%] transition-opacity ${
          navigation.state === 'loading' ? 'opacity-50' : ''
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
