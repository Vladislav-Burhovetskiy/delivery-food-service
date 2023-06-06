import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../stores/userInfo/userInfoSlice";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = useCallback((data) => {
    dispatch(setUserInfo(data));
  });

  useEffect(() => {
    const submitData = () => {
      const data = watch();
      onSubmit(data);
    };

    submitData();
  }, [watch, onSubmit]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label">
        Name:
        <input
          {...register("name", { required: true })}
          className="form__input"
          type="text"
          id="name"
          placeholder="Name"
        />
      </label>
      <label className="form__label">
        Email:
        <input
          {...register("email", { required: true })}
          className="form__input"
          type="text"
          id="email"
          placeholder="Email"
        />
      </label>
      <label className="form__label">
        Phone:
        <input
          {...register("phone", { required: true })}
          className="form__input"
          type="text"
          id="phone"
          placeholder="Phone"
        />
      </label>
      <label className="form__label">
        Address:
        <input
          {...register("address", { required: true })}
          className="form__input"
          type="text"
          id="address"
          placeholder="Street address"
        />
      </label>
    </form>
  );
}

export default Form;
