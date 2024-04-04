import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center pt-4">
      <Image
        src="/medilatam.svg"
        alt="logo Medilatam"
        width={1000}
        height={760} />
    </section>
  );
}
