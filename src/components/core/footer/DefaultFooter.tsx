'use client';
// import { toast } from "@/hooks/use-toast";
import Button from '@/components/ui/button2';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';
import FacebookIcon from '../icons/publicIcon/FacebookIcon';
import InstagramIcon from '../icons/publicIcon/InstagramIcon';
import LinkedinIcon from '../icons/publicIcon/LinkedinIcon';
import SkypeIcon from '../icons/publicIcon/SkypeIcon';
import WhatsappIcon from '../icons/publicIcon/WhatsappIcon';
import TextInput from '../input/TextInput';
import Logo from '../Logo/Logo';

// Define the types for the props of the Newsletter component
type NewsletterProps = {
  handleDataSubmit: Function;
  isLoading: boolean;
};

// Newsletter component with type safety
const Newsletter: React.FC<NewsletterProps> = ({ handleDataSubmit, isLoading }) => {
  const { handleChange, values, touched, errors, handleSubmit, resetForm } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required('This Field is Required'),
    }),
    onSubmit: async (data) => {
      try {
        await handleDataSubmit(data);
        // toast({
        //     //   variant: 'success',
        //     description: 'Subscription completed',
        // });
        resetForm();
      } catch (err: any) {
        err.errors.forEach((key: { attr: string; detail: string }) => {
          // toast({
          //     description: `${key?.attr} - ${key?.detail}`,
          // });
        });
      }
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <TextInput
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          error={Boolean(errors.email) && touched.email ? errors.email : undefined}
          placeholder="Enter Your Email"
        />
        <div>
          <Button
            type="submit"
            variant={'primarybtn'}
            className="w-full"
            label={isLoading ? 'Sending..' : 'Sent'}
          />
        </div>
      </form>
    </div>
  );
};

// Footer component with type safety
const DefaultFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    // <div className="md:bg-[url('/footerSVG1.svg')] bg-f-primary-1-100 md:bg-transparent bg-cover bg-center w-full h-full">
    <div className="relative overflow-hidden bg-f-white-300">
      {/* <div className="absolute bottom-0 w-full hidden lg:block ">
                <WavyIcon />
                pt-52
            </div> */}
      {/* className="bg-[url('/footerSVG1.svg')] bg-cover bg-center w-full h-full" */}
      <div className="sticky fly-commonContainer top-[100vh] pt-16">
        <footer className="w-full  flex flex-col justify-between items-center md:items-start gap-5 xl:gap-x-10 lg:flex-row gap-y-10">
          {/* 1 */}
          <div className="w-full lg:w-1/4 flex flex-col gap-y-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="">
                <Logo />
              </div>
              <p className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repellat excepturi. Ad
                alias rem, deserunt incidunt, enim sit consequuntur neque magnam eaque cum cumque
                officiis et, possimus sint animi repellat!
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full md:w-1/5">
            <div className="flex flex-col items-center gap-3 ml:0 lg:ml-10 md:items-start">
              <p className="text-w-paragraph-regular-20 uppercase">Company</p>
              <Link href="/about">About</Link>
              <Link href="/service">Service</Link>
              <Link href="/#contact">Contact Us</Link>
              <Link href="/blog">Our Blogs</Link>
              <Link href={'/quote?type=trialWork'}>Free Trial</Link>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full md:w-1/5">
            <div className="flex flex-col items-center gap-3 ml:0 lg:ml-10 md:items-start">
              <p className="text-w-paragraph-regular-20 uppercase">Company</p>
              <Link href="/about">About</Link>
              <Link href="/service">Service</Link>
              <Link href="/#contact">Contact Us</Link>
              <Link href="/blog">Our Blogs</Link>
              <Link href={'/quote?type=trialWork'}>Free Trial</Link>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full md:w-1/5 whitespace-nowrap">
            <div className="flex flex-col items-center gap-3 ml:0 lg:ml-10 md:items-start">
              <p className="text-w-paragraph-regular-20 uppercase">Service</p>
              <Link href="/about">About</Link>
              <Link href="/service">Service</Link>
              <Link href="/#contact">Contact Us</Link>
              <Link href="/blog">Our Blogs</Link>
              <Link href={'/quote?type=trialWork'}>Free Trial</Link>
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col justify-end gap-2 w-full md:w-2/4 lg:w-1/4">
            <p className="text-w-paragraph-regular-20 text-center uppercase md:text-left">
              Contact us
            </p>
            <Newsletter isLoading={false} handleDataSubmit={async () => {}} />
            <div className="pt-5">
              <p className="text-w-paragraph-regular-20 whitespace-nowrap text-center md:text-left">
                Our Every Media
              </p>
              <div className="flex justify-center md:justify-start w-[80%] md:w-full mx-auto gap-5 mt-1.5">
                <Link target="_blank" href="https://wa.me/8801517836043">
                  <WhatsappIcon size="32" />
                </Link>
                <Link target="_blank" href="https://join.skype.com/invite/WPctQ2K5fran">
                  <SkypeIcon size="32" />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/omnicstudio">
                  <FacebookIcon size="32" />
                </Link>
                <Link target="_blank" href="https://linkedin.com/in/omnic-studio-2b68b130b">
                  <LinkedinIcon size="32" />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/omnicstudio">
                  <InstagramIcon size="32" />
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <div>
          <div className="my-5 xl:my-7 h-[1px] bg-f-black-200"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center pb-3">
              © Copyright {year}, All Rights Reserved by Fly Alone
            </p>
            <div className="flex flex-col md:flex-row items-center whitespace-nowrap md:gap-5">
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;
