import React from 'react';
import CountdownBanner from './CountdownBanner';
import DetailImages from './DetailImages';
import VideoPlayer from './VideoPlayer';
import DropdownList from './DropdownList';
import IntroText from './IntroText';
import DiscountPrice from "./DiscountPrice.tsx";

interface IntroTabProps {
    detailImages: string[];
    dropdownContents: { title: string; content: string }[];
    videoId: string;
    introText: string;
    timeLeft: string;
}

const IntroTab: React.FC<IntroTabProps> = ({
                                               detailImages,
                                               dropdownContents,
                                               videoId,
                                               introText,
                                               timeLeft,
                                           }) => {
    return (
        <div>
            <CountdownBanner timeLeft={timeLeft} />
            <DiscountPrice />
            <DetailImages images={detailImages} />
            <div style={{ marginBottom: '2rem' }}>
                <VideoPlayer videoId={videoId} />
            </div>
            <DropdownList contents={dropdownContents} />
            <IntroText text={introText} />
        </div>
    );
};

export default IntroTab;
