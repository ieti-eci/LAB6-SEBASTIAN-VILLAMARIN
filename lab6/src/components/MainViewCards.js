import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

const items = [
    {description: "2 series de muscle up de 4 repeticiones.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Completo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de pull up de 10 repeticiones sin peso.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Completo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de pull up abiertas de 10 repeticiones con peso.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Completo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de pull up cerradas de 10 repeticiones con peso.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Completo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de pull up invertidas de 10 repeticiones con peso.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Completo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de pull up de 10 repeticiones con peso.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Completo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de 12 repeticiones de Triceps en barra.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Listo",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de 12 repeticiones de fondos.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Ejercitandose",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de 15 repetciones de mancuerna codo pegado en la cabeza para triceps.",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Ejercitandose",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de 15 repetciones de mancuerna invertida para triceps",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Ejercitandose",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
    {description: "4 series de 15 segundos de estiramiento",responsible: {name: "Sebastian Villamarin",email: "svillamarin27"},status: "Ejercitandose",dueDate: new Date().getDay() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()},
]

class MainViewCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid className={classes.grid}>
                {items.map((task,index) => {
                    return (
                        <center key={index}>
                        <Grid >
                            <Card className={classes.root}>
                            <CardActionArea>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {task.status === "Listo" && <AlarmOnIcon fontSize = "large" className={classes.statusReady}/>}
                                        {task.status === "Completo" && <CheckCircleIcon fontSize = "large" className={classes.statusCompleted}/>}
                                        {task.status === "Ejercitandose" && <AutorenewIcon fontSize = "large" className={classes.statusInProgress}/>}
                                    </Avatar>
                                    }
                                    title={
                                    <Typography gutterBottom variant="h5" component="h2">
                                                {task.description}
                                    </Typography>}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {task.status}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {task.dueDate}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {task.responsible.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                        </Grid>
                        </center>
                    )
                })}
            </Grid>
        )
    }
}



const styles = theme => ({
    root: {
        maxWidth: 800,
        marginBottom: "50px",
    },
    grid: {
        alignContent: "center",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#FFFFFF",
    },
    statusReady: {
        color: "#0071EA",
    },
    statusCompleted: {
        color: "#3CCA0A",
    },
    statusInProgress: {
        color: "#DA4B15",
    },
});


export default withStyles(styles, { withTheme: true })(MainViewCards);