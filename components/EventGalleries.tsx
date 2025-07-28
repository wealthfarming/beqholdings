"use client";

import WhiteGroupMeetingComponent from "./WhiteGroupMeetingComponent";
import VietnamUniversitiesComponent from "./VietnamUniversitiesComponent";
import InHouseTrainingComponent from "./InHouseTrainingComponent";
import MOUSignatureComponent from "./MOUSignatureComponent";

const EventGalleries = () => {
  return (
    <div className="container mx-auto px-4">
      <WhiteGroupMeetingComponent />
      <VietnamUniversitiesComponent />
      <InHouseTrainingComponent />
      <MOUSignatureComponent />
    </div>
  );
};

export default EventGalleries;