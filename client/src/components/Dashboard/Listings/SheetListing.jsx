import React from "react";
import SheetDetails from "./ListingDetails/SheetDetails";

function SheetListing({ sheets, refetch }) {
  return (
    <div className="flex flex-row flex-wrap">
      {sheets.map((sheet) => (
        <SheetDetails
          key={`${sheet._id}-${sheet.event}-${sheet.session}`} // Combined key of sheet.id, sheet.event, sheet.session, incase sheet.id has a duplicate
          sheet={sheet} // Pass sheet to sheetDetails for handleDelete function
          refetch={refetch} // Pass refetch query to sheetDetails for handleDelete function
        ></SheetDetails>
      ))}
    </div>
  );
}

export default SheetListing;
