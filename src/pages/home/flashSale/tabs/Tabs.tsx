import { useState } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core'
import { Product, TabPanelProps } from '../../../../components/interface';
import ProductCard from '../../prodCard/ProdCard';
import style from './Tabs.module.scss'


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

const FlashSaleTimeTabs = ({ productList }: FlashSaleTimeTabsProps) => {

  const timeStamp: Array<string> = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
  const [currentTab, setCurrentTab] = useState<Number>(0)

  let time = []
  for (let i = 0; i < timeStamp.length; i++) {
    time.push(
      <Tab label={timeStamp[i]} style={{ color: currentTab === i ? "#FC820A" : "#808089" }} />
    )
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <AppBar className={style.appBar} position="static">
        <Tabs className={style.tabs}
          variant="scrollable" scrollButtons="off"
          value={currentTab} onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#FC820A" } }}
        >
          {time}
        </Tabs>
      </AppBar>
      {time.map((time, index) => (
        <TabPanel key={index} value={currentTab} index={index}>
          <div className={style.tabPanel}>
            {productList.map((product, index) => (
              <ProductCard productInfo={product} vertical={false} />
            ))}
          </div>
        </TabPanel>
      ))}
    </div>
  )
}

type FlashSaleTimeTabsProps = {
  productList: Array<Product>
}

export default FlashSaleTimeTabs
