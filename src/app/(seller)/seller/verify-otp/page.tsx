import VerifyOtpContainer from './_components/VerifyOtpContainer';

const page = () => {
  return (
    <div className="relative">
      <div>{/* <AuthBgIcon size={'full'} /> */}</div>
      <div>
        <VerifyOtpContainer />
      </div>
    </div>
  );
};

export default page;
