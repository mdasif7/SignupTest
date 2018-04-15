import React from 'react';

import {AppBar, Toolbar, Typography} from 'material-ui';

const Header = (props) => (
    <AppBar position="static">

        <Toolbar>
            <Typography variant="headline" color="inherit">
                {props.children}
            </Typography>
          
        </Toolbar>
    </AppBar>
   );
   
   export default Header;