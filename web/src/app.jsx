import List from "./components/List"

const App = () => {
    return <>
        <div className="billing-menu">
            <div className="header">
                <div className="label">
                    BILLING MENU
                </div>
                <div className="close">
                    <i className="fa-light fa-xmark"></i>
                </div>
            </div>
            <div className="content">
                <div className="box-info">
                    <div className="title">
                        รายการใบแจ้งหนี้ที่คุณยังไม่ได้ชำระ
                    </div>
                    <div className="value">
                        0
                    </div>
                </div>
                <div className="box-groups">
                    <div className="box-info">
                        <div className="title">
                            ยอดเงินภายในตัวคุณ
                        </div>
                        <div className="value">
                            1,000 <small>LD</small>
                        </div>
                    </div>
                    <div className="box-info">
                        <div className="title">
                            ยอดเงินภายในบัญชีธนาคาร
                        </div>
                        <div className="value">
                            1,000 <small>LD</small>
                        </div>
                    </div>
                </div>
                <div className="bills-list">
                    <div className="title">
                        รายการใบแจ้งหนี้ทั้งหมด
                    </div>
                    <div className="list">
                        <List
                            className="scroll"
                            itemClassName="bill"
                            data={new Array(512).fill(null)}
                            content={(item, i) => {
                                return <>
                                    
                                </>
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default App