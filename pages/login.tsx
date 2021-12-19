import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import React from "react";

function Login({ providers }: { providers: ClientSafeProvider }) {
  return (
    <div className="flex flex-col bg-black w-full h-screen items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-green-400 text-white p-5 rounded-full"
          >
            Sign With {provider.name}
          </button>{" "}
        </div>
      ))}
    </div>
  );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
