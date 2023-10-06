import React from "react";
import Title from "../../ui/title/title";
import StarCard from "../../ui/start-card/start-card";
import Button from "../../ui/button/button";
import { StarItem, StarList, StyledStarsList } from "./style";

function StarsList({ stars, level }) {
    return (
      <StyledStarsList>
      {stars?.length ? (
        <>
          <Title level={level}>Наши звёзды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
        </>
      ) : null}
      <Button minWidth={353} link="/buy">
        Купить билет
      </Button>
    </StyledStarsList>
    );
  }
  
  export default StarsList;
