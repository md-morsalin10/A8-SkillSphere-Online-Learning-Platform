"use client";
import SideContent from "@/components/SideContent/SideContent";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { easeInOut, motion } from "motion/react"

const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { email, password } = data;

        // console.log("Login Data:", email, password);

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        });
        // console.log(res, error, "from login");
        if (error) {
            toast.error(error.message || "Invalid credentials!");
            return;
        }

        toast.success("Login successful! Redirecting...");
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="flex gap-10 justify-center items-center p-3 lg:p-1 container mx-auto my-10">
            <div className="hidden lg:block lg:w-1/2">
                <SideContent />
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}

                className="w-full max-w-md lg:w-1/2  flex flex-col justify-center border border-gray-200 rounded-2xl shadow-2xl p-8 lg:p-5 h-full space-y-4 items-center">
                <div className="text-center space-y-2 pb-6">
                    <h2 className="text-3xl font-semibold text-[#0B1C30]">Welcome back</h2>
                    <p className="text-sm text-[#464555]">Enter your details to access your dashboard.</p>
                </div>
                <Form className="flex  flex-col gap-4 space-y-2" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input className={'w-full'} placeholder="Enter Your Email Address" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input className={'w-full'} placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center items-center gap-2">
                        <Button className={'w-full bg-indigo-600'} type="submit">
                            <Check />
                            Submit
                        </Button>
                    </div>

                    <div className="flex items-center my-2">
                        <div className="grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm font-medium uppercase">
                            Or continue with
                        </span>
                        <div className="grow border-t border-gray-300"></div>
                    </div>

                </Form>
                <div>


                    <div>
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn w-full btn-outline btn-primary"
                        ><FaGoogle /> SignIn Google</button>
                    </div>

                    <div className="pt-5">
                        <p className="text-sm text-[#464555]">Don't have an account? <Link href={'/register'}>
                            <span className="font-bold text-indigo-600 cursor-pointer">Register</span>
                        </Link></p>
                    </div>
                </div>


            </motion.div>
        </div>
    );
}

export default LoginPage;