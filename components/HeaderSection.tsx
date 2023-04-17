import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import { BsInstagram, BsMeta, BsTwitter } from "react-icons/bs";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <div>
      <header className="flex justify-between mb-20 container mx-auto max-w-screen-xl px-5 md:px-0 py-14">
        <Image src="/images/logo.svg" alt="logo-img" width={240} height={39} className="w-[160px] h-[28px]"/>
        <button className="text-pink outline outline-offset-2 outline-1 rounded-full px-6 py-1 outline-pink">
          Try Free
        </button>
      </header>
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-5 mb-20">
          <h1 className="md:text-4xl text-3xl text-center text-veryDarkCyan font-bold mb-5">
            Build The Community Your Fans Will Love
          </h1>
          <div className="md:px-96">
            <p className="text-center text-veryDarkCyan mb-10">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="bg-pink block mx-auto mb-16 text-white shadow-md rounded-full py-2 px-6">
              Get Started For Free
            </button>
          </div>
        </div>
        <Image
          src="/images/screen-mockups.svg"
          alt="top1-img"
          width={800}
          height={800}
          priority
          className="mx-auto mb-20"
        />
        <div className="hidden md:flex justify-around">
          <div className="flex flex-col gap-y-3">
            <Image
              src="/images/icon-messages.svg"
              alt="top1-img"
              width={35}
              height={35}
              className="w-[42px] h-[42px]"
            />
            <span className="text-6xl text-veryDarkCyan font-bold">1.4k+</span>
            <p className="text-center">Messages Sent</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <Image
              src="/images/icon-communities.svg"
              alt="top1-img"
              width={35}
              height={35}
              className="w-[42px] h-[42px]"
            />
            <span className="text-6xl text-veryDarkCyan font-bold">2.7m+</span>
            <p className="text-center">Communities Formed</p>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center gap-y-16 justify-around">
          <div className="flex flex-col gap-y-3">
            <Image
              src="/images/icon-messages.svg"
              alt="top1-img"
              width={35}
              height={35}
            />
            <span className="text-6xl text-veryDarkCyan font-bold">1.4k+</span>
            <p className="text-center">Messages Sent</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <Image
              src="/images/icon-communities.svg"
              alt="top1-img"
              width={35}
              height={35}
            />
            <span className="text-6xl text-veryDarkCyan font-bold">2.7m+</span>
            <p className="text-center">Communities Formed</p>
          </div>
        </div>
      </div>
      {/* ARTICLES */}
      {/* ARTICLE 1 START */}
      <Image
        src="/images/bg-section-top-mobile-1.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="md:hidden flex w-full"
      />
      <Image
        src="/images/bg-section-top-desktop-1.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="hidden md:flex w-full"
      />
      <article className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-y-4 justify-center px-5 md:pr-28 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
            <h3 className="text-veryDarkCyan text-center md:text-left font-bold text-2xl">
              Grow Together
            </h3>
            <p className="text-center md:text-left">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <Image
            src="/images/illustration-grow-together.svg"
            alt="top1-img"
            width={600}
            height={600}
            className="row-start-1 row-end-2 md:col-start-2 md:col-end-3 mb-20 md:mb-0"
          />
        </div>
      </article>
      <Image
        src="/images/bg-section-bottom-desktop-1.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="hidden md:flex w-full"
      />
      <Image
        src="/images/bg-section-bottom-mobile-1.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="md:hidden flex w-full"
      />
      {/* ARTICLE 1 END */}
      {/* ARTICLE 2 START */}
      <article className="grid grid-cols-1 md:grid-cols-2 my-32 container mx-auto max-w-screen-xl">
        <Image
          src="/images/illustration-flowing-conversation.svg"
          alt="top1-img"
          width={600}
          height={600}
        />
        <div className="flex flex-col gap-y-4 justify-center px-5 md:pl-28">
          <h3 className="text-veryDarkCyan text-center md:text-left font-bold text-2xl">
            Flowing Conversations
          </h3>
          <p className="text-center md:text-left">
            You wouldn&apos;t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </article>
      {/* ARTICLE 2 END */}
      {/* ARTICLE 3 START */}
      <Image
        src="/images/bg-section-top-mobile-2.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="md:hidden flex w-full"
      />
      <Image
        src="/images/bg-section-top-desktop-2.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="hidden md:flex w-full"
      />
      <article className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-y-4 justify-center px-5 md:pr-28 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
            <h3 className="text-veryDarkCyan text-center md:text-left font-bold text-2xl">
              Your Users
            </h3>
            <p className="text-center md:text-left">
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <Image
            src="/images/illustration-your-users.svg"
            alt="top1-img"
            width={600}
            height={600}
            className="row-start-1 row-end-2 md:col-start-2 md:col-end-3 mb-20 md:mb-0"
          />
        </div>
      </article>
      <Image
        src="/images/bg-section-bottom-desktop-2.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="w-full md:flex hidden"
      />
      <Image
        src="/images/bg-section-bottom-mobile-2.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="md:hidden w-full flex"
      />
      {/* ARTICLE 3 END */}
      {/* FOOTER */}
      <div className="container mx-auto max-w-screen-xl mb-64 mt-40">
        <h2 className="mb-8 text-center font-bold text-4xl text-veryDarkCyan">
          Ready to build your community?
        </h2>
        <button className="bg-pink block mx-auto mb-16 text-white shadow-md rounded-full py-2 px-6">
          Get Started For Free
        </button>
      </div>
      <Image
        src="/images/bg-footer-top-mobile.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="md:hidden flex"
      />
      <Image
        src="/images/bg-footer-top-desktop.svg"
        alt="top1-img"
        width={600}
        height={600}
        className="w-full hidden md:flex"
      />
      <footer className="bg-veryDarkCyan pb-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 mx-auto max-w-screen-xl">
          <div className="px-5 md:px-0 md:col-start-1 md:col-end-2 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
            <Logo className="mb-4" />
            <p className="text-white mb-10  text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="mb-4">
              <div className="flex gap-x-3">
                <MdPhoneInTalk color="#fff" />
                <p className="text-white text-sm mb-3 font-light">
                  Phone: +1-543-123-4567
                </p>
              </div>
              <div className="flex gap-x-3 mb-10">
                <MdOutlineEmail color="#fff" />
                <p className="text-white text-sm font-light">
                  example@huddle.com
                </p>
              </div>
              <div className="flex gap-x-4">
                <BsMeta color="#fff" size={"1.25rem"} />
                <BsInstagram color="#fff" size={"1.25rem"} />
                <BsTwitter color="#fff" size={"1.25rem"} />
              </div>
            </div>
          </div>
          <div className="md:col-start-4 px-5 md:px-0 md:col-end-5 row-start-1 row-end-2 mb-16 pt-16 md:pt-0 md:mb-0">
            <div>
              <h1 className="text-lg font-bold text-white uppercase mb-8 md:mb-12">
                Newsletter
              </h1>
              <p className="text-white mb-8 text-sm font-light">
                To recieve tips on how to grow your community, sign up to our
                weekly newsletter. We’ll never send you spam or pass on your
                email address
              </p>
            </div>
            <form action="">
              <input
                type="text"
                className="rounded-sm py-[.4rem] pl-3 mr-5"
                placeholder="myemail@mail.com"
              />
              <input
                type="submit"
                value="Subscribe"
                className="py-[.5rem] px-4 bg-pink rounded-sm text-white text-sm"
              />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeaderSection;
