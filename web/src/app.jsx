import List from "./components/List"

const App = () => {
    return <>
        <div className="billing-menu show">
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
                    <div className="bill-header">
                        <div className="title">
                            รายการใบแจ้งหนี้ทั้งหมด
                        </div>
                        <div className="btn">
                            จ่ายทั้งหมด
                        </div>
                    </div>
                    <div className="list">
                        <List
                            perPage={5}
                            className="scroll"
                            itemClassName="bill"
                            data={new Array(512).fill(null)}
                            emptyText="ไม่มีรายการใบแจ้งหนี้"
                            content={(item, i) => {
                                return <>
                                    <div className="bill-info">
                                        <div className="label">
                                            Fine: Lorem, ipsum dolor.
                                        </div>
                                        <div className="info">
                                            จำนวน: 1,000 <small>LD</small>
                                        </div>
                                    </div>
                                    <div className="bill-action">
                                        <div className="btn">
                                            จ่ายบิล
                                        </div>
                                    </div>
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