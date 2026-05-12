import { motion } from 'framer-motion';

const Snowflakes = () => {
  const snowflakes = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {snowflakes.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            top: "-5%", 
            left: `${Math.random() * 100}%` 
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            top: "105%",
            left: `${(Math.random() * 100) + (Math.random() * 10 - 5)}%`,
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute text-secondary/30 text-2xl select-none"
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
};

export default Snowflakes;
