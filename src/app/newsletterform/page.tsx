"use client";
import "./form.css";
import React, { useState, useRef, useEffect } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik"; // Renomeie o 'Form' aqui
import * as Yup from "yup";
import Image from "next/image";
import ActualLogo from "../../../public/assets/img/actcodlogo.png";
import Confetti from "react-confetti/dist/types/Confetti";
import { IoIosCloseCircle } from "react-icons/io";
import Header from "../components/header/Header";
import BottomShadow from "../components/bottomshadow/BottomShadow"
import axios from "axios";

type Props = {};
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function Form({}: Props) {
    const [status, setStatus] = useState<number | null>(null);
    const [message, setMessage] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [run, setRun] = useState<boolean>(false);
    const [totalCounts, setTotalCounts] = useState<number>(400);
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
      });
      useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;
        setDimensions({
          width,
          height,
        });
      }, []);

    return(
        <main className="flex flex-col items-center justify-center h-[100vh]">
            <Header/>
            <BottomShadow/>
        <div className="hero-container flex flex-col items-center justify-center w-[70%]
        h-[500px] rounded-lg">
            <Image src={ActualLogo} className="w-[170px]" alt="actual coding logo"/>
            <h1 className="form-h1">Newsletter</h1>
            <p className="text-blue-dark text-xl">Fique sempre por dentro das tendências, técnologias e informações.</p>
            <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={requiredSchema}
          onSubmit={async (values, { resetForm }) => {
            setButtonDisabled(true);
            try {
              const response = await fetch("/api/subscribenst", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values?.email,
                }),
              });
              const datas = await response.json();
              if (datas.status >= 400) {
                setStatus(datas.status);
                setMessage(
                  "Error joining the newsletter. You can directly contact me at github@ebraj."
                );
                setTimeout(() => {
                  setMessage("");
                  setButtonDisabled(false);
                }, 2000);
                return;
              }

              setStatus(201);
              setMessage("Thank you for subscribing my newsletter 👻.");
              setShowConfetti(true);
              setRun(true);
              setTimeout(() => {
                setTotalCounts(0);
                setMessage("");
                resetForm();
                setButtonDisabled(false);
              }, 4000);
              setTotalCounts(400);
            } catch (error) {
              setStatus(500);
              setMessage(
                "Error joining the newsletter."
              );
              setTimeout(() => {
                setMessage("");
                setButtonDisabled(false);
              }, 2000);
            }
          }}
        >
              <FormikForm>
            <div className="flex items-center space-x-2">
              <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button
                className="px-5 py-3 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? "Submitting" : "Submit"}
              </button>
            </div>
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </FormikForm>
        </Formik>
            </div>
        </main>
    );
}