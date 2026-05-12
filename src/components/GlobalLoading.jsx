import { Spinner } from '@heroui/react';

const GlobalLoading = () => {
    return (
        <div className="flex justify-center items-center p-5">
          <section className="flex gap-1">
            <Spinner />
            <Spinner />
            <Spinner />
            <Spinner />
            <Spinner />
          </section>
        </div>
      );
};

export default GlobalLoading;