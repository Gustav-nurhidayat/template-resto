import React, { useState } from "react";
import {
  ArrowLeft,
  X,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Utensils,
} from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { login as loginService } from "../../services/auth.service";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Isi semua kolom!");
      return;
    }

    try {
      const response = await loginService({
        email,
        password,
      });

      login(
        response.data.token,
        response.data.user
      );

      toast.success(
        `Selamat datang, ${response.data.user.name}!`
      );

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Email atau password salah."
      );
    }
  };

  const handleForgotPassword = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!forgotEmail.trim()) {
      toast.error("Harap masukkan email.");
      return;
    }

    toast("Fitur reset password belum tersedia.", {
      icon: "ℹ️",
    });

    setForgotEmail("");
    setIsForgotOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#17110E] text-[#F3EDE3]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Central ambient glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#9F4A36]/[0.055]
            blur-[170px]
          "
        />

        {/* Champagne glow */}
        <div
          className="
            absolute
            left-[15%]
            top-[20%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#C8A77A]/[0.025]
            blur-[120px]
          "
        />

        {/* Architectural circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[820px]
            w-[820px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#F3EDE3]/[0.035]
          "
        />

        {/* Inner circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[610px]
            w-[610px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#C8A77A]/[0.07]
          "
        />

        {/* Corner arc */}
        <div
          className="
            absolute
            -right-56
            -top-56
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#C8A77A]/[0.045]
          "
        />

        {/* Subtle texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
            [background-image:linear-gradient(rgba(243,237,227,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(243,237,227,0.5)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />
      </div>

      {/* =====================================================
          BACK
      ====================================================== */}

      <button
        type="button"
        onClick={() => navigate("/")}
        className="
          absolute
          left-6
          top-6
          z-20
          flex
          items-center
          gap-2
          text-[9px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-[#F3EDE3]/30
          transition
          hover:text-[#C8A77A]
          sm:left-9
          sm:top-9
        "
      >
        <ArrowLeft size={13} />
        Back
      </button>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-20
        "
      >
        <div className="w-full max-w-[420px]">
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="mb-10 text-center">
            {/* Emblem */}
            <div
              className="
                relative
                mx-auto
                mb-7
                flex
                h-[72px]
                w-[72px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C8A77A]/30
                bg-[#C8A77A]/[0.035]
              "
            >
              <div
                className="
                  absolute
                  inset-[6px]
                  rounded-full
                  border
                  border-[#F3EDE3]/[0.07]
                "
              />

              <div
                className="
                  absolute
                  inset-[12px]
                  rounded-full
                  border
                  border-[#C8A77A]/[0.12]
                "
              />

              <Utensils
                size={21}
                strokeWidth={1.25}
                className="text-[#C8A77A]"
              />
            </div>

            {/* Logo */}
            <h1
              className="
                font-serif
                text-[34px]
                font-medium
                tracking-[0.18em]
                text-[#F3EDE3]
              "
            >
              CENTA
            </h1>

            {/* Divider */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#C8A77A]/30" />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.45em]
                  text-[#C8A77A]
                "
              >
                Restaurant
              </span>

              <span className="h-px w-9 bg-[#C8A77A]/30" />
            </div>
          </div>

          {/* =================================================
              CARD
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-[#F3EDE3]/[0.075]
              bg-[#241A15]/80
              shadow-[0_40px_120px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
          >
            {/* Luxury top line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A77A]/70 to-transparent" />

            <div className="p-7 sm:p-9">
              {/* Header */}
              <div className="mb-8">
                <p
                  className="
                    mb-3
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#C8A77A]
                  "
                >
                  Private access
                </p>

                <h2
                  className="
                    font-serif
                    text-[32px]
                    font-medium
                    tracking-[-0.02em]
                    text-[#F3EDE3]
                  "
                >
                  Welcome back
                </h2>

                <p
                  className="
                    mt-2
                    text-[13px]
                    leading-6
                    text-[#F3EDE3]/35
                  "
                >
                  Sign in to access your restaurant
                  administration.
                </p>
              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleLogin}
                className="space-y-5"
              >
                {/* EMAIL */}
                <div>
                  <label
                    className="
                      mb-2.5
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#F3EDE3]/40
                    "
                  >
                    Email address
                  </label>

                  <div className="group relative">
                    <Mail
                      size={16}
                      strokeWidth={1.4}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#F3EDE3]/20
                        transition
                        group-focus-within:text-[#C8A77A]
                      "
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="admin@centarestaurant.com"
                      className="
                        h-[53px]
                        w-full
                        rounded-lg
                        border
                        border-[#F3EDE3]/[0.075]
                        bg-[#17110E]/70
                        pl-11
                        pr-4
                        text-[13px]
                        text-[#F3EDE3]
                        outline-none
                        transition
                        placeholder:text-[#F3EDE3]/15
                        hover:border-[#F3EDE3]/[0.12]
                        focus:border-[#C8A77A]/45
                        focus:bg-[#17110E]
                        focus:ring-4
                        focus:ring-[#C8A77A]/[0.035]
                      "
                      required
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label
                    className="
                      mb-2.5
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#F3EDE3]/40
                    "
                  >
                    Password
                  </label>

                  <div className="group relative">
                    <LockKeyhole
                      size={16}
                      strokeWidth={1.4}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#F3EDE3]/20
                        transition
                        group-focus-within:text-[#C8A77A]
                      "
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="Enter your password"
                      className="
                        h-[53px]
                        w-full
                        rounded-lg
                        border
                        border-[#F3EDE3]/[0.075]
                        bg-[#17110E]/70
                        pl-11
                        pr-12
                        text-[13px]
                        text-[#F3EDE3]
                        outline-none
                        transition
                        placeholder:text-[#F3EDE3]/15
                        hover:border-[#F3EDE3]/[0.12]
                        focus:border-[#C8A77A]/45
                        focus:bg-[#17110E]
                        focus:ring-4
                        focus:ring-[#C8A77A]/[0.035]
                      "
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#F3EDE3]/20
                        transition
                        hover:text-[#C8A77A]
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* OPTIONS */}
                <div className="flex items-center justify-between pt-1">
                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2.5
                      text-[11px]
                      text-[#F3EDE3]/30
                    "
                  >
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) =>
                        setRemember(
                          e.target.checked
                        )
                      }
                      className="
                        h-3.5
                        w-3.5
                        cursor-pointer
                        accent-[#C8A77A]
                      "
                    />

                    Remember me
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setIsForgotOpen(true)
                    }
                    className="
                      text-[11px]
                      font-medium
                      text-[#C8A77A]
                      transition
                      hover:text-[#DFC397]
                    "
                  >
                    Forgot password?
                  </button>
                </div>

                {/* LOGIN */}
                <button
                  type="submit"
                  className="
                    mt-3
                    h-[53px]
                    w-full
                    rounded-lg
                    border
                    border-[#C8A77A]/30
                    bg-[#C8A77A]
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#17110E]
                    shadow-[0_10px_35px_rgba(200,167,122,0.08)]
                    transition
                    duration-300
                    hover:bg-[#D6B887]
                    hover:shadow-[0_15px_45px_rgba(200,167,122,0.14)]
                    active:scale-[0.99]
                  "
                >
                  Sign In
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8">
                <div className="mb-5 h-px bg-[#F3EDE3]/[0.055]" />

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-[#F3EDE3]/18
                    "
                  >
                    Secure administration
                  </span>

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-[#F3EDE3]/18
                    "
                  >
                    Centa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-7 text-center">
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-[#C8A77A]/30
              "
            >
              Good food · Great moments
            </p>
          </div>
        </div>
      </main>

      {/* =====================================================
          FORGOT PASSWORD MODAL
      ====================================================== */}

      {isForgotOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#17110E]/85
            px-5
            backdrop-blur-md
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[410px]
              overflow-hidden
              rounded-[22px]
              border
              border-[#F3EDE3]/[0.08]
              bg-[#241A15]
              shadow-[0_40px_120px_rgba(0,0,0,0.6)]
            "
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A77A]/70 to-transparent" />

            <div className="p-7 sm:p-8">
              {/* Close */}
              <button
                type="button"
                onClick={() =>
                  setIsForgotOpen(false)
                }
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F3EDE3]/[0.06]
                  bg-[#F3EDE3]/[0.025]
                  text-[#F3EDE3]/30
                  transition
                  hover:border-[#C8A77A]/20
                  hover:text-[#C8A77A]
                "
              >
                <X size={15} />
              </button>

              {/* Icon */}
              <div
                className="
                  mb-6
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C8A77A]/25
                  bg-[#C8A77A]/[0.04]
                "
              >
                <Mail
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#C8A77A]"
                />
              </div>

              <p
                className="
                  mb-2
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#C8A77A]
                "
              >
                Account recovery
              </p>

              <h2
                className="
                  font-serif
                  text-3xl
                  font-medium
                  text-[#F3EDE3]
                "
              >
                Reset password
              </h2>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-6
                  text-[#F3EDE3]/35
                "
              >
                Enter your registered email address
                to continue with account recovery.
              </p>

              <form
                onSubmit={handleForgotPassword}
                className="mt-7 space-y-5"
              >
                <div>
                  <label
                    className="
                      mb-2.5
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#F3EDE3]/40
                    "
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) =>
                      setForgotEmail(
                        e.target.value
                      )
                    }
                    placeholder="admin@centarestaurant.com"
                    className="
                      h-[52px]
                      w-full
                      rounded-lg
                      border
                      border-[#F3EDE3]/[0.075]
                      bg-[#17110E]
                      px-4
                      text-[13px]
                      text-[#F3EDE3]
                      outline-none
                      placeholder:text-[#F3EDE3]/15
                      focus:border-[#C8A77A]/45
                    "
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="
                    h-[52px]
                    w-full
                    rounded-lg
                    bg-[#C8A77A]
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#17110E]
                    transition
                    hover:bg-[#D6B887]
                  "
                >
                  Send Reset Link
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
