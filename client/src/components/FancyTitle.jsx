import { Box } from "@mui/material";

export default function FancyTitle({title}) {
    const chars = title.split('');
    const words = title.split(' ');
    const titleCharLength = title.length; //Total chars
    const length = words.length; //Total words
    // Count the total characters -> apply a function to split integer into three unequal parts -> use those int/float values to select words from string
    const splitIntoThreePartsUnequal = (totalLength) => {
        // 50% 30% 20% split, must always add up to 100% or 1
        const part1 = Math.floor(totalLength * 0.5);
        const part2 = Math.floor(totalLength * 0.3);
        const part3 = Math.floor(totalLength * 0.2);
        return[part1, part2, part3];
    }
    const [part1, part2, part3] = splitIntoThreePartsUnequal(titleCharLength);
    console.log(part1, part2, part3);

    const longestLine = chars.slice(0, part1).join(' ');
    const middleLine = chars.slice(part1, part1 + part2).join(' ');
    const shortestLine = chars.slice(part1 + part2).join(' ');

    return(
        <Box>
            <p>{longestLine}</p>
            <p>{middleLine}</p>
            <p>{shortestLine}</p>
        </Box>
    )
}