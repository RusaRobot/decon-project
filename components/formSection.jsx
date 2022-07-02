import ButtonCustom from "./buttonCustom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const FormSection = () => {
  //Toast
  const toast = useToast();

  //Disable button
  const [disable, setDisable] = useState(false);

  //Validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Input email first!"),
      name: Yup.string().required("Input name first!"),
    }),
    onSubmit: () => {},
  });

  const submitForm = () => {
    try {
      setDisable(true);
      toast({
        description:
          "Your name & email has been succesfully submitted! We will reach you soon",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setDisable(false);
    }
  };

  return (
    <div className="w-full h-[626px] bg-[#333533] flex flex-col">
      <div className="mx-auto flex justify-center w-[1060px] h-[453px] bg-[#202020] mt-20 px-10 py-14 rounded-3xl">
        <div className="text-white">
          <div className="text-[60px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD100] to-[#D6D6D6]">
            Interested with our 2nd NFT?
          </div>
          <div className="text-center text-[32px]">
            Input your name & email, we will reach you
          </div>
          <form>
            <div className="flex justify-center gap-3 mt-10">
              <div>
                <input
                  className="w-[348px] h-[43px] rounded-full px-3 text-black focus:outline-none focus:ring-4 focus:ring-[#FFD100]"
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-sm ml-3 text-red-500 pt-1">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  className="w-[348px] h-[43px] rounded-full px-3 text-black focus:outline-none focus:ring-4 focus:ring-[#FFD100]"
                  placeholder="Email"
                  type="text"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-sm ml-3 text-red-500 pt-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
            </div>
          </form>
          <div className="flex justify-center mt-10">
            <div className="hover:scale-110 duration-500">
              <ButtonCustom
                text="Submit"
                w="203px"
                h="76px"
                onClick={() => {
                  submitForm();
                }}
                size="32px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
