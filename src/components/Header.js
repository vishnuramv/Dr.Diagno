import {
	AppBar,
	Avatar,
	IconButton,
	makeStyles,
	Menu,
	MenuItem,
	Toolbar,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/auth";
import HeaderLogo from "./HeaderLogo";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: "white",
	},
	toolbar: {
		justifyContent: "space-between",
	},
	icon: {
		color: "green",
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}));

const Header = ({ imgURL, username }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const history = useHistory();
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton> */}
					{/* <Typography variant="h6" className={classes.title} >
                        Dr.Diagno
					</Typography> */}
					<HeaderLogo />
					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
							className={classes.icon}
						>
							<Avatar src={imgURL} className={classes.small} alt={username} />
							{/* <AccountCircle /> */}
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem
								onClick={() => {
									logout();
									handleClose();
									history.push("/login");
								}}
							>
								Logout
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default Header;
