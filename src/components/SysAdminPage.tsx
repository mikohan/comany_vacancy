import React from "react";
import { motion } from "framer-motion";
import { durationPage } from "../config";
import Typography from "@material-ui/core/Typography";

function SysAdminPage() {
  const someConst: string = "45";
  console.log(someConst);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>SysAdmin Page goes Here</h1>

      <Typography>Some stuff goes here</Typography>
    </motion.div>
  );
}

export default SysAdminPage;
