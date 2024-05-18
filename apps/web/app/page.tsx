"use client";
import Image from "next/image";
import { Card } from "@repo/ui";
import { Code } from "@repo/ui";
import styles from "./page.module.css";
import { Button } from "@repo/ui";
import { useCreateUser } from "./module/user/query/create-user.query";

const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

export default function Page(): JSX.Element {
  const createUser = useCreateUser();

  return (
    <main className={styles.main}>
      <div>
        <p className="text-green-600">
          examples/basic&nbsp;
          <Code className={styles.code}>web</Code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{" "}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <Button
        appName="web"
        className={styles.button}
        onClick={() =>
          createUser({
            email: "james",
            name: "ejiro@joinveet.com",
            password: "11111111",
            role: {},
          })
        }
      >
        Create user
      </Button>

      <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}
