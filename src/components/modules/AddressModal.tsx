import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { AddressFormValues, AddressModalProps } from "../../types/AppTypes";

const AddressModal: React.FC<AddressModalProps> = ({
  isOpen,
  isPending,
  onOpenChange,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormValues>();

  return (
    <Modal
      backdrop="blur"
      placement="center"
      className="lg:p-10 !h-fit"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              onClose();
            })}
          >
            <ModalHeader className="titleText !text-orangeLight !text-center !p-4 ">
              افزودن آدرس
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="addressLabel">استان</label>
                  <Input
                    {...register("province", {
                      required: "وارد کردن استان الزامی است",
                    })}
                    variant="bordered"
                    placeholder="مثال: آذربایجان شرقی"
                  />
                  {errors.province && (
                    <p className="span">{errors.province.message}</p>
                  )}
                </div>

                <div>
                  <label className="addressLabel">شهر</label>
                  <Input
                    {...register("city", {
                      required: "وارد کردن شهر الزامی است",
                    })}
                    variant="bordered"
                    placeholder="مثال: تبریز"
                  />
                  {errors.city && <p className="span">{errors.city.message}</p>}
                </div>

                <div>
                  <label className="addressLabel">کد پستی</label>
                  <Input
                    type="number"
                    {...register("postalCode", {
                      required: "وارد کردن کد پستی الزامی است",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "کد پستی باید ۱۰ رقمی باشد",
                      },
                    })}
                    variant="bordered"
                    placeholder="مثال: 1234567890"
                  />
                  {errors.postalCode && (
                    <p className="span">{errors.postalCode.message}</p>
                  )}
                </div>

                <div>
                  <label className="addressLabel">آدرس</label>
                  <Input
                    {...register("detail", {
                      required: "وارد کردن آدرس الزامی است",
                    })}
                    variant="bordered"
                    placeholder="مثال: خیابان ولیعصر، پلاک ۲۰"
                  />
                  {errors.detail && (
                    <p className="span">{errors.detail.message}</p>
                  )}
                </div>
              </div>
            </ModalBody>

            <ModalFooter className="flex flex-col ">
              <Button
                className="btn !lg:text-base"
                color="primary"
                type="submit"
                isLoading={isPending}
              >
                {isPending?" در حال پردازش ...":
               " تایید و ثبت نهایی خرید"}
              </Button>
              <Button
                className="w-[100%]"
                color="danger"
                variant="light"
                onPress={onClose}
              >
                لغو
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddressModal;
