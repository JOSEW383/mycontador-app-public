"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  Button,
} from "@mantine/core";
import Image from "next/image";
import classes from "@/styles/HeaderLanding.module.css";
import Link from "next/link";


export default function HeaderLanding({ children }) {
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
          <Burger opened={opened} onClick={toggleMenu} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group className={classes.title}>
              <Image width={50} height={50} alt={"logo"} src={"/favicon.png"} />
              My Contador
            </Group>
            <Group gap={0} visibleFrom="sm">
              <a className={classes.control} href="#features" underline="never">
                Features
              </a>
              <a className={classes.control} href="#app" underline="never">
                App
              </a>
              <a className={classes.control} href="#gallery" underline="never">
                Gallery
              </a>
            </Group>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Link href="/app">
                <Button variant="filled" radius="xl">
                  Login
                </Button>
              </Link>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
      <Link className={classes.control} href="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className={classes.control} href="#features" onClick={toggleMenu}>
          Features
        </Link>
        <Link className={classes.control} href="#app" onClick={toggleMenu}>
          App
        </Link>
        <Link className={classes.control} href="#gallery" onClick={toggleMenu}>
          Gallery
        </Link>
        <Link href="/app">
          <Button className={classes.menuButton} variant="filled" radius="xl" onClick={toggleMenu}>
            Login
          </Button>
        </Link>
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>{children}</AppShell.Main>
    </AppShell>
  );
}
