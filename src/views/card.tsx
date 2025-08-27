import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { imageData } from "./images";

const CARD_WIDTH = 300;
const CARD_HEIGHT = 430;

const food: [string, number, number][] = [
    ["Fresh tomatoes are delicious in salads.", 340, 10],
    ["Oranges are a great source of vitamin C.", 20, 40],
    ["Lemons add a zesty flavor to dishes.", 60, 90],
    ["Pears are sweet and juicy.", 80, 120],
    ["Apples keep the doctor away.", 100, 140],
    ["Blueberries are packed with antioxidants.", 205, 245],
];

const hue = (h: number) => `hsl(${h}, 100%, 30%)`;

const cardVariants: Variants = {
    offscreen: { y: 300 },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
};

const containerStyle: React.CSSProperties = {
    margin: "100px auto",
    paddingBottom: 100,
    width: "100%",
};

const cardContainerStyle: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    paddingTop: 20,
    columnGap: 20,
};

const splashStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
};

const cardStyle: React.CSSProperties = {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

interface CardProps {
    emoji: string;
    hueA: number;
    hueB: number;
    i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainerStyle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splashStyle, background }} />
            <motion.div
                style={{
                    ...cardStyle,
                    backgroundImage: `url(${imageData[i]?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                variants={cardVariants}
                className="card"
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        color: "white",
                        backgroundColor: "#00000059",
                        borderRadius: "inherit",
                    }}
                >
                    {emoji}
                </div>
            </motion.div>
            <motion.div
                style={{
                    zIndex: 1,
                    position: "relative",
                    padding: "16px",
                    color: "#fff",
                    width: "50%",
                }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8, once: true }}
                variants={{
                    offscreen: { opacity: 0, y: 20 },
                    onscreen: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.div>
        </motion.div>
    );
}

export default function ScrollTriggered() {
    return (
        <div style={containerStyle}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    );
}
