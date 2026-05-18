"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Building2, ArrowUpRight } from "lucide-react";

export default function SponsorshipContact() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-[var(--brand)]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1280px] ">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-[var(--brand)]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[var(--brand)]
              "
            >
              Sponsorship
            </span>

            <span className="h-[1px] w-10 bg-[var(--brand)]" />
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-[var(--secondary)]
              sm:text-5xl
            "
          >
            Partner With
            <span className="block text-[var(--brand)]">
              Our Journey
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[var(--secondary)]/70
              sm:text-base
            "
          >
            Collaborate with us through sponsorships, partnerships and
            brand activations that create unforgettable experiences.
          </p>
        </motion.div>

        {/* ================= CONTACT WRAP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            shadow-[0_20px_70px_rgba(0,0,0,0.12)]
            backdrop-blur-xl
          "
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* ================= LEFT INFO ================= */}
            <div
              className="
                relative
                border-b border-white/10
                p-7
                sm:p-10
                lg:border-b-0
                lg:border-r
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(245,176,66,0.08),transparent_45%)]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border border-[var(--brand)]/20
                    bg-[var(--brand)]/10
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[var(--brand)]
                    "
                  >
                    Contact Team
                  </span>
                </div>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    leading-tight
                    text-[var(--secondary)]
                  "
                >
                  Let’s build something impactful together.
                </h3>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-[var(--secondary)]/70
                  "
                >
                  Reach out for sponsorship opportunities, media
                  partnerships, event collaborations and strategic branding.
                </p>

                {/* info cards */}
                <div className="mt-10 space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      value: "partnerships@yourclub.com",
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      value: "+91 98765 43210",
                    },
                    {
                      icon: Building2,
                      title: "Office",
                      value: "Kolkata, India",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--brand)]/10
                          text-[var(--brand)]
                        "
                      >
                        <item.icon size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[var(--secondary)]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm text-[var(--secondary)]/70">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="p-7 sm:p-10 lg:p-12">
              <form className="space-y-5">
                {/* row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--secondary)]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="
                        w-full
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                        text-sm
                        text-[var(--secondary)]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[var(--secondary)]/40
                        focus:border-[var(--brand)]/50
                        focus:bg-white/[0.05]
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--secondary)]">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Your Company"
                      className="
                        w-full
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                        text-sm
                        text-[var(--secondary)]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[var(--secondary)]/40
                        focus:border-[var(--brand)]/50
                      "
                    />
                  </div>
                </div>

                {/* row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--secondary)]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="
                        w-full
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                        text-sm
                        text-[var(--secondary)]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[var(--secondary)]/40
                        focus:border-[var(--brand)]/50
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--secondary)]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="
                        w-full
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                        text-sm
                        text-[var(--secondary)]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[var(--secondary)]/40
                        focus:border-[var(--brand)]/50
                      "
                    />
                  </div>
                </div>

                {/* select */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--secondary)]">
                    Sponsorship Type
                  </label>

                  <select
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5
                      py-4
                      text-sm
                      text-[var(--secondary)]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[var(--brand)]/50
                    "
                  >
                    <option>Title Sponsorship</option>
                    <option>Event Partnership</option>
                    <option>Media Collaboration</option>
                    <option>Brand Activation</option>
                  </select>
                </div>

                {/* message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--secondary)]">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your partnership idea..."
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5
                      py-4
                      text-sm
                      text-[var(--secondary)]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[var(--secondary)]/40
                      focus:border-[var(--brand)]/50
                    "
                  />
                </div>

                {/* button */}
                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[var(--brand)]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_30px_rgba(245,176,66,0.2)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-[var(--brand-strong)]
                  "
                >
                  Send Proposal

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}