"use client";

import Image from "next/image";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CircularProgress,
  FormControl,
  TextField,
  Button,
  FormLabel as Label,
} from "@mui/material";
import { emailValidation as validationSchema } from "@/utils/validation/schemas";

export function SignInWithEmail() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    onSubmit: async () => {},
    validationSchema,
  });

  const notify = (text: string, success = false) =>
    success ? toast.success(text) : toast.error(text);

  const handleSignInWithEmail = async () => {
    if (!formik.values.email) return notify("Email is required");
    if (!formik.isValid) return notify("Invalid email");
    if (formik.errors && formik.errors.email)
      return notify(formik.errors.email);

    formik.setSubmitting(true);
    const signInResult = await signIn("email", {
      email: formik.values.email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    formik.setSubmitting(false);

    if (!signInResult?.ok)
      return notify(
        "Something went wrong, please try again" + signInResult?.error
      );

    return notify("Check your email", true);
  };
  const disabled = formik.isSubmitting || formik.values.email === "";

  return (
    <main>
      <FormControl
        sx={{ display: "grid", gap: 1, justifyItems: "center", minWidth: 250 }}
      >
        <ToastContainer
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          theme="colored"
        />
        <div className="rounded-image">
          <Image width={48} height={48} src="/logo.png" alt="login" />
          <Label component="h1">Sign in to your account</Label>
        </div>

        <Label>Email address</Label>
        <TextField
          value={formik.values.email}
          fullWidth
          onChange={formik.handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSignInWithEmail();
          }}
          id="email"
          name="email"
          type="email"
        />
        <Button disabled={disabled} onClick={handleSignInWithEmail} fullWidth>
          {formik.isSubmitting ? <CircularProgress /> : "Sign in with email"}
        </Button>
      </FormControl>
    </main>
  );
}
