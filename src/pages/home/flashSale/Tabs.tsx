import { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import { Product, TabPanelProps } from '../../../components/interface';
import ProductCard from '../prodCard/ProdCard';
import { getFlashSaleBooksAPI } from '../../../components/api'



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

const FlashSaleTimeTabs = () => {

  const timeStamp: Array<string> = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
  const [flashSaleProds, setFlashSaleProds] = useState<Array<Product>>([])
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

  const getFlashSaleProds = async (): Promise<any> => {
    let result = await getFlashSaleBooksAPI()
    setFlashSaleProds(result.data.data)
  }

  //  get products based on timestamp
  // const getFlashSaleProds = async (): Promise<any> => {
  //   let result = await getFlashSaleBooksAPI(timeStamp[currentTab])
  //   setFlashSaleProds(result.data.data)
  // }

  useEffect(() => {
    getFlashSaleProds()
  }, [])

  return (
    <div>
      <AppBar style={{marginBottom: '20px'}} position="static">
        <Tabs style={{backgroundColor: '#FCF4DD'}} variant="scrollable" scrollButtons="off" value={currentTab} onChange={handleChange} aria-label="simple tabs example" TabIndicatorProps={{ style: { backgroundColor: "#FC820A" } }}>
          {time}
        </Tabs>
      </AppBar>
      {time.map((time, index) => (
        <TabPanel key={index} value={currentTab} index={index}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {flashSaleProds.map((product, index) => (
              <ProductCard productInfo={product} vertical={false}/>
            ))}
          </div>
        </TabPanel>
      ))}
    </div>
  )
}

export default FlashSaleTimeTabs
