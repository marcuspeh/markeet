import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSales } from "../../actions/salesAction";

import { Line, Bar } from 'react-chartjs-2';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Sales extends Component {
    constructor() {
        super();
        this.state = { 
            sales: [],
            totalRevenueChartX: [],
            totalRevenueChartY: [],
            monthlyChartX: [],
            monthlyRevenueChartY: [],
            monthlySalesChartY: [],
            monthlyProfitChartY: [],
            totalRevenue: 0,
            totalProfit: 0,
            totalRevenueYear: 0,
            totalProfitYear: 0,
            totalRevenueMonth: 0,
            totalProfitMonth: 0,
        }
    }
    componentDidMount() {
        this.props.getSales();
    };
    
    componentDidUpdate(prevProp) {
        if (prevProp.sales !== this.props.sales) {
            if (this.props.sales) {
                var totalRevenue = 0;
                var totalCost = 0;
                
                var totalRevenueYear = 0;
                var totalCostYear = 0;

                var totalRevenueMonth = 0;
                var totalCostMonth = 0;

                var totalRevenueChartX = [];
                var totalRevenueChartY = [];

                var monthlyChartX = [];
                var monthlyRevenueChartY = [];
                var monthlySalesChartY = [];
                var monthlyProfitChartY = [];

                var index = this.props.sales.sales.length - 1;

                // Get current date
                var todayDate = new Date().toJSON().split("T")[0];

                // reverse iterate through the list of all the sales to make calculations easier
                for (; index >=0; index--) {
                    // Calculating the total revenue and cost
                    totalRevenue += this.props.sales.sales[index].total;
                    totalCost += this.props.sales.sales[index].cost;
                    
                    // Get date of the transaction we are iterating through
                    var date = this.props.sales.sales[index].date.split("T")[0];

                    if (date[0] === todayDate[0] && date[1] === todayDate[1]) {
                        // Calculating the total revenue and cost for the current year
                        totalRevenueYear += this.props.sales.sales[index].total;
                        totalCostYear += this.props.sales.sales[index].cost;

                        // Calculating the total revenue and cost for the current month
                        if (date[3] === todayDate[3] && date[4] === todayDate[4]) {
                            totalRevenueMonth += this.props.sales.sales[index].total;
                            totalCostMonth += this.props.sales.sales[index].cost;
                        }
                    }

                    // For the total revenue chart, we are going to only show the last 28 days
                    if (totalRevenueChartX.length < 28 || totalRevenueChartX[totalRevenueChartX.length - 1] === date) {
                        if (totalRevenueChartX[totalRevenueChartX.length - 1] !== date) {
                            totalRevenueChartX.push(date);
                            totalRevenueChartY.push(this.props.sales.sales[index].total);
                        } else {
                            totalRevenueChartY[totalRevenueChartY.length-1] += this.props.sales.sales[index].total;
                        }
                    }
                    
                    var month = date.substring(0, 7);
                    // For the monthly revenue chart, we are only going to show the last 3 months
                    if (monthlyChartX.length < 3 || monthlyChartX[monthlyChartX.length - 1] === month) {
                        if (monthlyChartX[monthlyChartX.length - 1] !== month) {
                            monthlyChartX.push(month);
                            monthlyRevenueChartY.push(this.props.sales.sales[index].total);
                            monthlyProfitChartY.push(this.props.sales.sales[index].total - this.props.sales.sales[index].cost);
                            monthlySalesChartY.push(1);
                        } else {
                            monthlyRevenueChartY[monthlyRevenueChartY.length - 1] += this.props.sales.sales[index].total;
                            monthlyProfitChartY[monthlyProfitChartY.length - 1] += this.props.sales.sales[index].total - this.props.sales.sales[index].cost;
                            monthlySalesChartY[monthlySalesChartY.length - 1] += 1;
                        }
                    }

                }
                this.setState({
                    sales: this.props.sales.sales,

                    totalRevenueChartX: totalRevenueChartX.reverse(),
                    totalRevenueChartY: totalRevenueChartY.reverse(),
                    monthlyChartX: monthlyChartX.reverse(),
                    monthlyRevenueChartY: monthlyRevenueChartY.reverse(),
                    monthlySalesChartY: monthlySalesChartY.reverse(),
                    monthlyProfitChartY: monthlyProfitChartY.reverse(),

                    totalRevenue: totalRevenue,
                    totalProfit: totalRevenue - totalCost,
                    totalRevenueYear: totalRevenueYear,
                    totalProfitYear: totalRevenueYear - totalCostYear,
                    totalRevenueMonth: totalRevenueMonth,
                    totalProfitMonth: totalRevenueMonth - totalCostMonth
                });
            }
        }
    }

    render() {
        var totalRevenueChartX = this.state.totalRevenueChartX;
        var totalRevenueChartY = this.state.totalRevenueChartY;
        var monthlyChartX = this.state.monthlyChartX;
        var monthlyRevenueChartY = this.state.monthlyRevenueChartY;
        var monthlySalesChartY = this.state.monthlySalesChartY;
        var monthlyProfitChartY = this.state.monthlyProfitChartY;
        return (
            <Container style={{marginTop:"1rem"}}>
                <Row>
                    <Col xs={12} style={{height: "90vh", display: "grid", gridTemplateColumns: "27% 27% 27% 19%", gridGap: "1rem", paddingRight:"0"}}>
                        <div style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                            <h5>Revenue for the last 28 days</h5>
                            <Line data={{
                                    labels: totalRevenueChartX,
                                    datasets: [{
                                        label: "Revenue",
                                        fill: false,
                                        lineTension: 0.5,
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 1,
                                        data: totalRevenueChartY
                                    }]
                                }}
                            />
                        </div>
                        <div style={{gridRowStart: "1", gridRowEnd: "3", gridColumnStart: "4", gridColumnEnd: "5"}}>
                            <div style={{height: "33.3%"}}>
                                <span style={{fontSize:"1.8em"}}>${this.state.totalRevenue}</span>
                                <p style={{fontSize:"0.8em"}}>Revenue (all time)</p>
                                <span style={{fontSize:"1.8em"}}>${this.state.totalProfit}</span>
                                <p style={{fontSize:"0.8em"}}>Profit (all time)</p>
                            </div>
                            <div style={{height: "33.3%"}}>
                                <span style={{fontSize:"1.8em"}}>${this.state.totalRevenueYear}</span>
                                <p style={{fontSize:"0.8em"}}>Revenue (year to date)</p>
                                <span style={{fontSize:"1.8em"}}>${this.state.totalProfitYear}</span>
                                <p style={{fontSize:"0.8em"}}>Revenue</p>
                            </div>
                            <div style={{height: "33.3%"}}>
                                <span style={{fontSize:"1.8em"}}>${this.state.totalRevenueMonth}</span>
                                <p style={{fontSize:"0.8em"}}>Revenue(monthly)</p>
                                <span style={{fontSize:"1.8em"}}>${this.state.totalProfitMonth}</span>
                                <p style={{fontSize:"0.8em"}}>Profit (monthly)</p>
                            </div>
                        </div>
                        <div>
                            <h5>Monthly Profit</h5>
                            <Bar data={{
                                    labels: monthlyChartX,
                                    datasets: [
                                      {
                                        label: 'Revenue',
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 0,
                                        data: monthlyProfitChartY
                                      }
                                    ]
                                  }}
                            />
                        </div>  
                        <div>
                            <h5>Monthly Revenue</h5>
                            <Bar data={{
                                    labels: monthlyChartX,
                                    datasets: [
                                      {
                                        label: 'Revenue',
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 0,
                                        data: monthlyRevenueChartY
                                      }
                                    ]
                                  }}
                            />
                        </div>
                        <div>
                            <h5>Monthly Sales</h5>
                            <Bar data={{
                                    labels: monthlyChartX,
                                    datasets: [
                                      {
                                        label: 'Revenue',
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 0,
                                        data: monthlySalesChartY
                                      }
                                    ]
                                  }}
                            />
                        </div>
                        <div style={{gridColumnStart: "1", gridColumnEnd: "3"}}>
                            <h5>Worse selling</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero vel magna porta, quis luctus purus sagittis. In bibendum tincidunt bibendum. In accumsan risus justo, at ullamcorper felis commodo sit amet. </p>
                        </div>
                        <div style={{gridColumnStart: "3", gridColumnEnd: "5"}}>
                            <h5>Best selling</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero vel magna porta, quis luctus purus sagittis. In bibendum tincidunt bibendum. In accumsan risus justo, at ullamcorper felis commodo sit amet. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Sales.propTypes = {
    auth: PropTypes.object.isRequired,
    sales: PropTypes.object.isRequired,
    getSales: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    sales: state.cart
});

export default connect(
    mapStateToProps,
    { getSales }
)(withRouter(Sales));