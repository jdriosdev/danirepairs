"use client";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";

import CallToActions from "@/components/callToActions";
import Logo from "@/components/Logo";
import styles from "../../page.module.css";
import { services, ServiceType } from "../data";
import { useEffect } from "react";
import NotFound from "@/components/NotFound";

const findService = (urlKey: string): ServiceType | null => {
  const service = services?.find((item) => item.urlKey === urlKey);

  if (!service || !service.show) return null;

  return {
    id: service.id,
    name: service.name,
    urlKey: service.urlKey,
    description: service.description,
    image: service.image,
    seoText: service.seoText,
    title: service.title,
    price: service.price,
    show: service.show,
  };
};

export default function Home() {
  const { urlkey } = useParams();
  const service = findService(urlkey as string);

  if (!service) return <NotFound />;

  useEffect(() => {
    document.title = `DR | ${service.name}`;
  }, [service]);

  return (
    <div>
      <Head>
        <title>{`${service.name} | DR`}</title>
        <meta name={service.title} content={service.seoText} key="desc" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <div
            style={{
              width: "100%",
              height: "30vh",
              position: "relative",
              marginBottom: "16px",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div style={{ paddingLeft: "16px" }}>
              <Logo />
            </div>
          </div>

          <div className={styles.intro}>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
            <p>{service.price}</p>
          </div>
          <CallToActions serviceName={service.name} />
        </main>
      </div>
    </div>
  );
}
