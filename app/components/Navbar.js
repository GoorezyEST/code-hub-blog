import Link from "next/link";
import React from "react";

import styles from "@/styles/modules/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <p>
          CODE&nbsp;<span>HUB</span>
        </p>
      </div>
      <div className={styles.links}>
        <Link href="/">INICIO</Link>
        <Link href="/posts">POSTS</Link>
      </div>
    </nav>
  );
}

export default Navbar;
