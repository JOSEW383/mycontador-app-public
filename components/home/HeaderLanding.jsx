"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Button } from "@mantine/core";
import Image from "next/image";
import classes from "@/styles/HeaderLanding.module.css";
import {Link} from "@/lib/i18n/routing";
import {useTranslations} from 'next-intl';

export default function HeaderLanding({ children }) {
  const t = useTranslations("home.header_landing");
  const [opened, { toggle }] = useDisclosure();

  function toggleMenu() {
    toggle();
    document.body.style.overflow = opened ? "auto" : "hidden";
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      withBorder={false}
    >
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggleMenu}
            hiddenFrom="sm"
            size="sm"
          />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group className={classes.title}>
              <Image width={50} height={50} alt={"logo"} src={"/favicon.png"} />
              MyContador
            </Group>
            <Group gap={0} visibleFrom="sm">
              <a className={classes.control} href="#features">
                {t("features")}
              </a>
              <a className={classes.control} href="#app">
                {t("app")}
              </a>
              <a className={classes.control} href="#gallery">
                {t("gallery")}
              </a>
            </Group>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Link href="/app">
                <Button variant="filled" radius="xl">
                  {t("login")}
                </Button>
              </Link>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Link className={classes.control} href="/" onClick={toggleMenu}>
          {t("home")}
        </Link>
        <Link className={classes.control} href="#features" onClick={toggleMenu}>
          {t("features")}
        </Link>
        <Link className={classes.control} href="#app" onClick={toggleMenu}>
          {t("app")}
        </Link>
        <Link className={classes.control} href="#gallery" onClick={toggleMenu}>
          {t("gallery")}
        </Link>
        <Link href="/app">
          <Button
            className={classes.menuButton}
            variant="filled"
            radius="xl"
            onClick={toggleMenu}
          >
            {t("login")}
          </Button>
        </Link>
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>{children}</AppShell.Main>
    </AppShell>
  );
}
