import React from "react";
import EmailInput from "@/components/EmailInput";

import styles from "../styles/Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <span>Your Dog.</span> <span>Your Life.</span> <span>Let&apos;s Go.</span>
                </div>
                <p>Unleash adventure with the perfect K9 companion - our hiking harness and backpack combo!</p>
                <EmailInput />
                <p className={styles.fundedText}>fully funded on indigogo</p>
            </div>
        </div>
    );
};

export default Hero;