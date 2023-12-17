"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/modules/recommendations.module.css";

function InnerRecommendations({ content }) {
  return (
    <div className={styles.recommendations}>
      <div className="title">
        <p>Otros posts</p>
        <h2>Relacionados:</h2>
      </div>
      <div className={styles.recommendations_inner}>{content}</div>
    </div>
  );
}

export default InnerRecommendations;
