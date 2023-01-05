import React from "react";
import Layout from "../components/shared/Layout";
import "./CheckMail.css"

export default function CheckMail() {

  return (
    <>
      <Layout>
        <div className="mail-msg">
          <h3>We have sent the password reset link to your registered email.Please check your mail!</h3>
        </div>
      </Layout>
    </>
  )
}