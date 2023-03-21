import * as React from 'react';
import { ContentArea } from './components/ContentArea';
import { ImageDrawer } from './components/ImageDrawer';
import { Layout } from './components/Layout';
import { Menu } from './components/Menu';
import { SUBMENU } from './constants';
import { usePhotos } from './lib/usePhotos';
import { PhotoRes } from './types/Photo';

const App: React.FC = () => {
  const { data, isLoading, isError } = usePhotos(
    'https://srv.3dcommerce.studio/public/shop/getProducts?shop=6412c8e785fad7b71567f17b'
  );
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>('animal');
  const [activeLabel, setActiveLabel] = React.useState<string>('Animals');
  const [categoryPhotos, setCategoryPhotos] = React.useState<PhotoRes[]>();
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoRes | null>(
    null
  );

  const handleClickCategory = (item: any) => {
    setActiveLabel(item.label);
    setSelectedCategory(item.category);
  };

  const handleClickPhoto = (photo: PhotoRes) => {
    setSelectedPhoto(photo);
  };

  React.useEffect(() => {
    data &&
      setCategoryPhotos(data.filter((i) => i.category === selectedCategory));
  }, [selectedCategory, isLoading]);

  return (
    <Layout>
      <Menu
        subMenu={SUBMENU}
        activeLabel={activeLabel}
        handleClickCategory={handleClickCategory}
      />
      <ImageDrawer
        activeLabel={activeLabel}
        data={categoryPhotos}
        selectedPhoto={selectedPhoto}
        handleClickPhoto={handleClickPhoto}
      />
      <ContentArea selectedPhoto={selectedPhoto} />
    </Layout>
  );
};

export default App;
