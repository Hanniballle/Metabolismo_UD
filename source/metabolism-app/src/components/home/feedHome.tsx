import React, { useEffect } from "react";
import { Box} from "@mui/material";
import HomeComponent from "./homeComponent";
import DetailView from "./detailView";
import { feedData } from "./data/feedData";
import { FeedItem } from "./data/interfaces"; 

interface FeedHomeProps {
  studentName: string;
}

const FeedHome: React.FC<FeedHomeProps> = ({ studentName }) => {
  const [likedItems, setLikedItems] = React.useState<{ [key: string]: boolean }>({});
  const [selectedItem, setSelectedItem] = React.useState<FeedItem | null>(null);

  const storageKey = `likedItems_${studentName}`;

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem(storageKey) || "{}");
    setLikedItems(storedLikes);
  }, [storageKey]);

  const toggleLike = (text: string) => {
    const updatedLikes = {
      ...likedItems,
      [text]: !likedItems[text],
    };
    setLikedItems(updatedLikes);
    localStorage.setItem(storageKey, JSON.stringify(updatedLikes));
  };

  return (
    <Box>
      {selectedItem ? (
        <DetailView item={selectedItem} />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2, 
            px: 2, 
          }}
        >
          {feedData.map((item, index) => (
            <HomeComponent
              key={index}
              item={item}
              index={index}
              likedItems={likedItems}
              toggleLike={toggleLike}
              onSelect={() => setSelectedItem(item)}
            />
          ))}
        </Box>
      )}
    </Box>
    
  );
};

export default FeedHome;