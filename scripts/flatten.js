const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const contractsDir = path.join(__dirname, '../contracts');
const outputDir = path.join(__dirname, '../flattened');
const outputFile = path.join(outputDir, 'LeveragedYieldFarm_flat.sol');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

execSync(`npx hardhat flatten ${contractsDir}/LeveragedYieldFarm.sol > ${outputFile}`);
console.log(`Flattened contract saved to ${outputFile}`);

