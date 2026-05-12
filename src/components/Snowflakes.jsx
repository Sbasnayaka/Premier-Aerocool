import { motion } from 'framer-motion';

const Snowflakes = () => {
  const elements = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {elements.map((_, i) => {
        const isImage = i % 2 === 0;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              top: "-10%", 
              left: `${Math.random() * 100}%` 
            }}
            animate={{ 
              opacity: [0, 0.4, 0.4, 0],
              top: "110%",
              left: `${(Math.random() * 100) + (Math.random() * 20 - 10)}%`,
              rotate: Math.random() * 360 + 360
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute select-none"
          >
            {isImage ? (
              <img 
                src="/snowflake.png" 
                alt="snow" 
                className="w-4 h-4 md:w-6 md:h-6 object-contain" 
              />
            ) : (
              <span className="text-secondary/30 text-xl md:text-2xl">❄</span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Snowflakes;
