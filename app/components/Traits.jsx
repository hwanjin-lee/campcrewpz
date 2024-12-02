// import React, { useState } from "react";
// import { traitSelector } from "../../util/traitSelector";
// import styles from "./Traits.module.css";

// const Traits = ({ traits }) => {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleMouseEnter = (event) => {
//     const rect = event.target.getBoundingClientRect();
//     setShowTooltip(true);
//   };

//   const handleMouseLeave = () => {
//     setShowTooltip(false);
//   };

//   return (
//     <div className={styles.container}>
//       {traits &&
//         traits.map((trait, index) => (
//           <div
//             className={styles.traitContainer}
//             onMouseEnter={(e) => handleMouseEnter(e)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className={styles.trait} key={index}>
//               {traitSelector(trait)}
//             </div>
//             {showTooltip && <div className={styles.tooltip}>{trait}</div>}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Traits;

import React, { useState } from "react";
import { traitSelector } from "../../util/traitSelector";
import styles from "./Traits.module.css";

const Traits = ({ traits }) => {
  const [tooltipStates, setTooltipStates] = useState(
    new Array(traits.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setTooltipStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setTooltipStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div className={styles.container}>
      {traits &&
        traits.map((trait, index) => (
          <div
            className={styles.traitContainer}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={index}
          >
            <div className={styles.trait}>{traitSelector(trait)}</div>
            {tooltipStates[index] && (
              <div className={styles.tooltip}>{trait}</div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Traits;
