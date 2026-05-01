"use client";
import SideContent from "@/components/SideContent/SideContent";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { name, image, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name, // user email address
            url, // user password -> min 8 characters by default
            email, // user display name
            password, // User image URL (optional)
            callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
        }, {
            onRequest: (ctx) => {
                //show loading
            },
            onSuccess: (ctx) => {
                router.push("/")
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
        });
        console.log(res, error);
    };

    return (
        <div className="flex gap-10 justify-center items-center container mx-auto my-10">
            <div>
                <SideContent/>
            </div>
            <div className="flex flex-col justify-center h-[70vh] items-center py-10 ">
                <Form className="flex w-full flex-col gap-4 border border-gray-200 space-y-2 p-5 rounded-2xl shadow-2xl" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input name="name" placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="url"
                        type="text"

                    >
                        <Label>Photo URL</Label>
                        <Input name="url" placeholder="Enter Photo URL" />
                        <FieldError />
                    </TextField>

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
                        <Input name="email" placeholder="Enter Email Address" />
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
                        <Input name="password" placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button className={'bg-indigo-600'} type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;