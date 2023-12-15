import React from "react";
import styles from "@/styles/modules/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <p>
          CODE&nbsp;<span>HUB</span>
        </p>
      </div>
      <div className={styles.links}>
        <Link href="/">INICIO</Link>
        <Link href="/posts">POSTS</Link>
      </div>
    </footer>
  );
}

export default Footer;
