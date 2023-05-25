import { Box, Typography } from "@mui/material";

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

    const findWordByCharacterIndex = (string, charIndex) => {
        const words = string.split(' ');
        let currPos = 0;

        for(let i = 0; i< words.length; i++){
            let word = words[i];
            let end = word.length + 1; //Plus one to account for space
            currPos += end;
            if(charIndex <= currPos){
                let wordIndex = i;
                return {word, wordIndex};
            }
        }
        return(null);
    }

    const [part1, part2, part3] = splitIntoThreePartsUnequal(titleCharLength);
    //console.log(part1, part2, part3);
    const res1 = findWordByCharacterIndex(title, part1);
    const res2 = findWordByCharacterIndex(title, part1 + part2);
    const res3 = findWordByCharacterIndex(title, part1 + part2 + part3);
    //console.log(res1, res2, res3);

    const longestLine = words.slice(0, res1.wordIndex + 1).join(' ');
    const middleLine = words.slice(res1.wordIndex + 1, res2.wordIndex + 1).join(' ');
    const shortestLine = words.slice(res2.wordIndex + 1).join(' ');
    //console.log(longestLine, middleLine, shortestLine);

    return(
        <Box className="fancy-title-container" sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1rem', borderRadius: '1rem', margin: '1rem', width: 'max-content'}}>
            <Typography sx={{backgroundColor: 'background.default'}} className="fancy-title fancy-title-topic" variant="p"><span className="fancy-title-topic-dot">•</span> Topic</Typography>
            <Typography sx={{backgroundColor: 'background.default'}} className="fancy-title fancy-title-top" variant="p">{longestLine}</Typography>
            <Typography sx={{backgroundColor: 'background.default'}} className="fancy-title fancy-title-middle" variant="p">{middleLine}</Typography>
            <Typography sx={{backgroundColor: 'background.default'}} className="fancy-title fancy-title-bottom" variant="p">{shortestLine}</Typography>
        </Box>
    )
}