import Link from "next/link";
import React from "react";

import styles from "@/styles/modules/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <span>LOGO</span>
      </div>
      <div className={styles.links}>
        <Link href="/">Inicio</Link>
        <Link href="/posts">Posts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
