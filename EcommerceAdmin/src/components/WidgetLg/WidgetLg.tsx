import React from "react";
import {
  WidgetLgContainer,
  WidgetLgCustomer,
  WidgetLgCustomerImage,
  WidgetLgTable,
  WidgetLgTableBody,
  WidgetLgTableColumn,
  WidgetLgTableHead,
  WidgetLgTableRow,
  WidgetLgTitle,
  WidgetLgCustomerName,
  WidgetLgStatusButton
} from "./WidgetLg.Styles";

type WidgetLgProps = {};

const WidgetLg: React.FC<WidgetLgProps> = ({}) => {
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest Transaction</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTableHead>
          <WidgetLgTableRow>
            <WidgetLgTableColumn style={{fontWeight: 600, fontSize: 20}}>Customer</WidgetLgTableColumn>
            <WidgetLgTableColumn style={{fontWeight: 600, fontSize: 20}}>Date</WidgetLgTableColumn>
            <WidgetLgTableColumn style={{fontWeight: 600, fontSize: 20}}>Amount</WidgetLgTableColumn>
            <WidgetLgTableColumn style={{fontWeight: 600, fontSize: 20}}>Status</WidgetLgTableColumn>
          </WidgetLgTableRow>
        </WidgetLgTableHead>
        <WidgetLgTableBody>
          <WidgetLgTableRow>
            <WidgetLgTableColumn>
              <WidgetLgCustomer>
                <WidgetLgCustomerImage src="/images/shlok.jpg" />
                <WidgetLgCustomerName>Shlok</WidgetLgCustomerName>
              </WidgetLgCustomer>
            </WidgetLgTableColumn>
            <WidgetLgTableColumn>10-10-2020</WidgetLgTableColumn>
            <WidgetLgTableColumn>$5000</WidgetLgTableColumn>
            <WidgetLgTableColumn>
                <WidgetLgStatusButton status="approved">
                    Approved
                </WidgetLgStatusButton>
            </WidgetLgTableColumn>
          </WidgetLgTableRow>
        </WidgetLgTableBody>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};

export default WidgetLg;
