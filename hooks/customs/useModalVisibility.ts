export interface IHandleModalClick {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
  handleModalClick: () => void;
}

import { useVisibilityControlStore } from '@/hooks/zustand/useVisibilityControlStore';

const useModalVisibility = (): IHandleModalClick => {
  const { isModalVisible, setIsModalVisible } = useVisibilityControlStore();

  const handleModalClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return {
    isModalVisible,
    setIsModalVisible,
    handleModalClick,
  };
};

export default useModalVisibility;
